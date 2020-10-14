import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'MapWebPartStrings';
import Map from './components/Map';
import { IMapProps } from './components/IMapProps';
import * as jQuery from "jquery";
require('../../../src/styles/imaps.css');
require('customjs');
// require('fabricMinJs');
// require('fabricMinCss');
// require('font-awesome');


export interface IMapWebPartProps {
  description: string;
}

export default class MapWebPart extends BaseClientSideWebPart<IMapWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMapProps> = React.createElement(
      Map,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

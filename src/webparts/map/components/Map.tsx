import * as React from 'react';
import styles from './Map.module.scss'; 
import { IMapProps } from './IMapProps';
import { escape } from '@microsoft/sp-lodash-subset';
require('customjs');
export default class Map extends React.Component<IMapProps, {}> {
  public render(): React.ReactElement<IMapProps> {
    return (
      <div className="ms-Grid">
            <div className="ms-Grid-row background-img">
              <div className="map-inner img-magnifier-container" style={{textAlign: 'center'}} id="mapDiv">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="chkClickMe" />
                  <label htmlFor="chkClickMe">Enable Magnifier</label>
                </div>
               
                <img src={require('./imaps.png')} useMap="#map" id="map-image" width="100%" data-themekey="#" />
                <map name="map">
                  <area target=" " alt="" title="Brazil" href=" " coords="422,442,399,447,386,435,375,450,367,445,362,457,347,475,369,479,386,493,401,503,405,522,413,535,414,547,407,554,414,561,429,545,475,468,462,509,456,525,442,531,428,450,466,461,451,493,445,510,465,475,455,501,442,492,444,502,443,518" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Brazil" id="modalOpen" />
                  <area target=" " alt="" title="US" href=" " coords="283,270,180,266,175,292,183,314,193,327,215,336,230,334,245,340,262,349,282,341,306,340,317,337,336,317,351,294,362,278,358,286" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="US" id="modalOpen" />
                  <area target=" " alt="" title="US" href=" " coords="113,161,60,153,38,165,46,176,46,184,47,194,33,202,56,217,70,219,93,207,114,210" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="US" id="modalOpen" />
                  <area target=" " alt="" title="South Korea" href=" " coords="1017,306,1022,305,1025,317,1016,320" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="South Korea" id="modalOpen" />
                  <area target=" " alt="" title="Germany" href=" " coords="616,235,608,253,610,261,615,263,614,269,632,269,634,264,630,258,638,252,634,237" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Germany" id="modalOpen" />
                  <area target=" " alt="" title="Canada" href=" " coords="116,162,117,214,175,265,151,255,414,271,381,180,320,130,390,66" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Canada" id="modalOpen" />
                  <area target=" " alt="" title="Poland" href=" " coords="637,238,666,235,668,253,663,261,639,250" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Poland" id="modalOpen" />
                  <area target=" " alt="" title="Slovakia" href=" " coords="650,259,637,265,659,265,657,248" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Slovakia" id="modalOpen" />
                  <area target=" " alt="" title="Russia" href=" " coords="684,152,681,223,725,255,710,276,745,288,789,248,845,235,878,257,985,258,1015,239,1061,257,1145,196,1215,179,911,79,823,133,685,155,685,207" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Russia" id="modalOpen" />
                  <area target=" " alt="" title="Denmark" href=" " coords="353,102,444,211,520,155,553,76,416,69" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Denmark" id="modalOpen" />
                  <area target=" " alt="" title="China" href=" " coords="985,241,985,269,939,291,879,261,838,292,879,343,912,341,926,365,983,362,1009,292,1045,263" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="China" id="modalOpen" />
                  <area target=" " alt="" title="Estonia" href=" " coords="668,212,671,219,683,221,683,211" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Estonia" id="modalOpen" />
                  <area target=" " alt="" title="Latvia" href=" " coords="672,219,670,224,678,231,684,226,680,220" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Latvia" id="modalOpen" />
                  <area target=" " alt="" title="Lithuania" href=" " coords="660,227,661,232,670,238,678,229,666,225" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Lithuania" id="modalOpen" />
                  <area target=" " alt="" title="Australia" href=" " coords="1045,488,975,525,978,564,1031,554,1080,583,1115,538,1072,485" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Australia" id="modalOpen" />
                  <area target=" " alt="" title="Argentina" href=" " coords="355,525,345,638,394,535,358,525" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Argentina" id="modalOpen" />
                  <area target=" " alt="" title="South Africa" href=" " coords="645,545,655,565,696,545,690,520" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="South Africa" id="modalOpen" />
                  <area target=" " alt="" title="Norway" href=" " coords="715,149,662,147,636,163,602,198,603,215,622,214,624,191,643,162,656,156,667,160,678,151,585,154" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Norway" id="modalOpen" />
                  <area target=" " alt="" title="Saudi Arabia" href=" " coords="710,345,730,383,778,364,720,325" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Saudi Arabia" id="modalOpen" />
                  <area target=" " alt="" title="Mexico" href=" " coords="190,330,262,390,290,368,260,376,252,355" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Mexico" id="modalOpen" />
                  <area target=" " alt="" title="Finland" href=" " coords="661,158,676,181,661,195,668,207,685,205,691,155" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Finland" id="modalOpen" />
                  <area target=" " alt="" title="Sweden" href=" " coords="653,161,642,160,607,217,630,228,667,175" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Sweden" id="modalOpen" />
                  <area target=" " alt="" title="Japan" href=" " coords="1070,276,1063,288,1059,305,1027,324,1029,332,1072,318,1069,300,1065,290,1081,285" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Japan" id="modalOpen" />
                  <area target=" " alt="" title="New Zealand" href=" " coords="1173,566,1181,579,1155,611,1162,615,1189,585,1193,579" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="New Zealand" id="modalOpen" />
                  <area target=" " alt="" title="France" href=" " coords="595,255,573,265,580,285,600,285,613,285,610,275,615,260,600,255" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="France" id="modalOpen" />
                  <area target=" " alt="" title="Spain" href=" " coords="545,285,560,295,558,309,565,314,580,307,593,290" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Spain" id="modalOpen" />
                  <area target=" " alt="" title="Portugal" href=" " coords="555,290,552,309,557,310,561,291" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Portugal" id="modalOpen" />
                  <area target=" " alt="" title="Italy" href=" " coords="612,273,615,284,623,283,644,301,644,308,652,297,633,278,637,274,615,268" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Italy" id="modalOpen" />
                  <area target=" " alt="" title="UAE" href=" " coords="760,360,763,364,773,364,775,355" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="UAE" id="modalOpen" />
                  <area target=" " alt="" title="Greece" href=" " coords="679,292,658,295,656,301,667,312,671,306,670,298,678,295" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Greece" id="modalOpen" />
                  <area target=" " alt="" title="UK" href=" " coords="566,227,577,241,573,241,569,256,592,250,593,243,581,221,578,214" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="UK" id="modalOpen" />
                  <area target=" " alt="" title="Ireland" href=" " coords="568,233,558,233,554,236,554,249,566,246" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Ireland" id="modalOpen" />
                  <area target=" " alt="" title="Czech Republic" href=" " coords="638,252,630,255,635,262,648,261,652,258" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Czech Republic" id="modalOpen" />
                  <area target=" " alt="" title="Hungry" href=" " coords="641,272,659,273,666,265,664,263,644,266" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Hungry" id="modalOpen" />
                  <area target=" " alt="" title="Croatia" href=" " coords="650,274,641,272,640,280,649,287,642,277,652,277" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Croatia" id="modalOpen" />
                  <area target=" " alt="" title="Slovenia" href=" " coords="630,271,628,274,633,278,637,272" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Slovenia" id="modalOpen" />
                  <area target=" " alt="" title="Switzerland" href=" " coords="608,267,605,272,610,274,620,270,615,267" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Switzerland" id="modalOpen" />
                  <area target=" " alt="" title="Belgium" href=" " coords="597,250,593,251,605,258,602,251" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Belgium" id="modalOpen" />
                  <area target=" " alt="" title="Netherland" href=" " coords="604,240,595,249,603,251,607,242" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Netherland" id="modalOpen" />
                  <area target=" " alt="" title="Bulgaria" href=" " coords="660,282,660,293,678,290,680,284" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Bulgaria" id="modalOpen" />
                  <area target=" " alt="" title="Turkey" href=" " coords="675,299,676,308,687,314,735,309,729,293,705,292,695,291" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Turkey" id="modalOpen" />
                  <area target=" " alt="" title="Algeria" href=" " coords="576,318,578,330,553,343,594,377,603,375,623,361,615,351,610,311" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Algeria" id="modalOpen" />
                  <area target=" " alt="" title="Austria" href=" " coords="635,261,641,262,636,270,624,269,613,270,610,274,603,272,607,267,627,267" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Austria" id="modalOpen" />
                  <area target=" " alt="" title="Colombia" href=" " coords="313,439,344,453,343,438,352,437,351,422,335,419,331,412,339,402,337,400" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Colombia" id="Austria" />
                  <area target=" " alt="" title="Jordan" href=" " coords="703,340,713,335,710,332,717,329,717,326,709,328,705,327" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Jordan" id="modalOpen" />
                  <area target=" " alt="" title="Luxembourg" href=" " coords="603,255,600,257,605,258" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Luxembourg" id="modalOpen" />
                  <area target=" " alt="" title="Romania" href=" " coords="661,265,653,274,661,281,671,283,681,280,675,265" shape="poly" data-toggle="modal" data-target="#myModal" data-whatever="Romania" id="modalOpen" />
                </map>
               
              </div>
              <div id="log" />
              {/*fabric ui modal box*/}
              <div className="ms-Grid">
                <div className="ms-Grid-row">
                  <div className="ma-Grid-col ma-u-lg12 ms-u-md12 ms-u-sm12">
                    <div className="docs-DialogExample-lgHeader" id="myModal">
                      <div className="ms-Dialog ms-Dialog--lgHeader dialogsize">
                        <div className="ms-Dialog-title">Country - Denmark</div>
                        <div className="ms-Dialog-content">
                          <a href="https://www.google.com/" className="ms-Dialog-subText">
                            Denmark_Country Profile_Nov2019
                          </a>
                        </div>
                        <div className="ms-Dialog-actions">
                          <button className="ms-Button ms-Dialog-action ms-Button--primary">
                            <span className="ms-Button-label">Close</span>
                          </button>
                        </div>
                      </div>                
                      <label className="docs-DialogExample-label" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  };
};

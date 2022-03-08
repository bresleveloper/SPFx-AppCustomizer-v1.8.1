import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';

import * as strings from 'AddJsCssFromRootV4ApplicationCustomizerStrings';

const LOG_SOURCE: string = 'AddJsCssFromRootV4ApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IAddJsCssFromRootV4ApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class AddJsCssFromRootV4ApplicationCustomizer
  extends BaseApplicationCustomizer<IAddJsCssFromRootV4ApplicationCustomizerProperties> {

  private _JS: string = "/rootCustomFiles/rootCustomSiteScript.js";
  private _CSS: string = "/rootCustomFiles/rootCustomSiteScript.css";
    

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    console.log(`Hello from AddCssJsFromRoot ${strings.Title}:\n\n${message}`);
    console.log('window._spPageContextInfo', window['_spPageContextInfo']);
    console.log('this.context.pageContext', this.context.pageContext);

    if (window['_spPageContextInfo']) {
      console.log('AddCssJsFromRootWeb system page, moving on');
    } else {
      console.log('AddCssJsFromRootWeb add csss to end of head');

      const head: any = document.getElementsByTagName("head")[0] || document.documentElement;
      let customStyle: HTMLLinkElement = document.createElement("link");
      customStyle.href = this._CSS;
      customStyle.rel = "stylesheet";
      customStyle.type = "text/css";
      head.insertAdjacentElement("beforeEnd", customStyle);


      console.log('AddCssJsFromRootWeb add js to end of body');
      let myScriptTag: HTMLScriptElement = document.createElement("script");
      myScriptTag.src = this._JS;
      myScriptTag.type = "text/javascript";
      document.body.appendChild(myScriptTag);

      //add some data to page
      window['injected_pageContext'] = this.context.pageContext;
      //window['customData'].webAbsoluteUrl =  this.context.pageContext.web.absoluteUrl;
      //window['customData'].user =  this.context.pageContext.user;
      console.log("AddCssJsFromRootWeb window['injected_pageContext']", window['injected_pageContext']);
    }


    console.log('AddCssJsFromRootWeb done');




    return Promise.resolve();
  }
}

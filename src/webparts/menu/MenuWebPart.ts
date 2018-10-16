import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'MenuWebPartStrings';
import Menu from './components/Menu';
import { IMenuProps } from './components/IMenuProps';

export interface IMenuWebPartProps {
  description: string;
}

export default class MenuWebPart extends BaseClientSideWebPart<IMenuWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IMenuProps> = React.createElement(
      Menu,
      {
        items: [
          { name: 'Home', url: '', key: 'key3' },
          { name: 'Admin', key: 'key4' }
        ]
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

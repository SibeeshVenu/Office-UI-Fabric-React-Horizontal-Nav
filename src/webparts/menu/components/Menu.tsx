import * as React from 'react';
import { IMenuProps } from './IMenuProps';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

export default class Menu extends React.Component<IMenuProps, {}> {
  constructor(props: IMenuProps) {
    super(props);
  }
  public render(): React.ReactElement<IMenuProps> {
    const { items } = this.props;

    return (
      <div>
        <CommandBar items={items} />
      </div>
    );
  }
}
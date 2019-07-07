import React from "react";
import { DocsPage, DocsComponent, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Highlight from 'react-highlight';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../uswds/components/Tables';
import Tag from '../../uswds/components/Tag';

/**
 * Displays the Styleguide content for Sidebars.
 */
export default class SidebarContainer extends React.Component
{
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render()
  {
    return (
      <DocsPage title="Side Navigation">
        
        {/* If multiple component or component groups on the page, wrap each in a DocsComponent */}
        <DocsComponent title="Component name" id="XXXX_THE_ID_XXXX">
        
          {/* Dependencies */}
          <DocsSection title="Dependencies">
            <h5>Explain what the 3rd-party dependency is and what it does</h5>
            <Highlight className="bash">
              {`npm install --save react-thirdpartything`}
            </Highlight>
          </DocsSection>
          
          {/* Importing */}
          <DocsSection title="Importing">
            <Highlight className="javascript">
              {`import XXXX from '.%path%/uswds/components/XXXX';`}
            </Highlight>
          </DocsSection>
          
          {/* Props */}
          <DocsSection title="Props">
            <Table columns={['Prop', 'Type', 'Default', 'Description']}>
              <TableRow>
                <TableHeaderCell>propName<br /><Tag>Required</Tag></TableHeaderCell>
                <TableCell>bool</TableCell>
                <TableCell>false</TableCell>
                <TableCell>What_it_does</TableCell>
              </TableRow>
            </Table>
          </DocsSection>
          
          {/* Accessibility */}
          <DocsSection title="Accessibility"></DocsSection>
          
          {/* Usage */}
          <DocsSection title="Usage">
            <DocsExample>
              <DocsPreview>
                Rendered_example_here
              </DocsPreview>
              <Highlight className="html">
                {`<YourCode>Goes here</YourCode`}
              </Highlight>
            </DocsExample>
          </DocsSection>
          
        </DocsComponent>
      </DocsPage>
    );
  }
}

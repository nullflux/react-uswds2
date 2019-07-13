import React from 'react';
import { DocsPage, DocsComponent, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';
import Highlight from 'react-highlight';
import { Table, TableRow, TableHeaderCell, TableCell } from '../../uswds/components/Tables';
import TextInput from '../../uswds/components/TextInput';
import TextArea from '../../uswds/components/TextArea';
import Dropdown from '../../uswds/components/Dropdown';
import Checkbox from '../../uswds/components/Checkbox';
import Radio from '../../uswds/components/Radio';
import Fieldset from '../../uswds/components/Fieldset';
import FormGroup from  '../../uswds/components/FormGroup';
import { EmailValidator, ZipCodeValidator, PhoneValidator } from '../../uswds/utils/validators';
import Tag from '../../uswds/components/Tag';


//  Content for the form controls page
//  @returns {node} rendered DOM node

export default function FormControlsContainer() {
  return (
    <DocsPage title="Form Controls">
      <DocsComponent title="Text input" id="text-input">
        <DocsSection title="Importing">
          <h5>TextInput is the only required component</h5>
          <Highlight className="javascript">
            {`import TextInput from '../../uswds/components/TextInput';`}
          </Highlight>
          <h5>Optionally include one or more validators for field validation</h5>
          <Highlight className="javascript">
            {`import { ZipCodeValidator, PhoneValidator } from '../lib/utils/validators';`}
          </Highlight>
        </DocsSection>

        <DocsSection title="Props">
          <Table columns={['Prop', 'Type', 'Default', 'Description']}>
            <TableRow>
              <TableHeaderCell>label  <Tag>Required</Tag></TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>Text for the input's label</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>id</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>generated unique id</TableCell>
              <TableCell>sets the input's id attribute the label's for attribute</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>type</TableHeaderCell>
              <TableCell>oneOf ['text', 'email', 'password', 'search', 'url', 'date', 'month', 'tel', 'week', 'number']</TableCell>
              <TableCell>'text'</TableCell>
              <TableCell>input type</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>value</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>if provided, pre-populates the input with the given string</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>required</TableHeaderCell>
              <TableCell>bool</TableCell>
              <TableCell>false</TableCell>
              <TableCell>adds required label, required attribute, and aria-required='true'</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>errorMessage</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>If provided, triggers the error state and displays the error message</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>isValid</TableHeaderCell>
              <TableCell>bool</TableCell>
              <TableCell>false</TableCell>
              <TableCell>if true, sets the valid state (green border)</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>allowedChars</TableHeaderCell>
              <TableCell>Validator object</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>if provided, user can only type characters that match the given test</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>validators</TableHeaderCell>
              <TableCell>array of Validator objects</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>if provided, field gets error state onBlur if the value does not match the given test(s)</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>spellCheck</TableHeaderCell>
              <TableCell>bool</TableCell>
              <TableCell>false</TableCell>
              <TableCell>if true, enables browser autocorrection while typing</TableCell>
            </TableRow>
          </Table>
        </DocsSection>

        <DocsSection title="Usage">
          <DocsExample>
            <DocsPreview>
              <form className="usa-form">
                <TextInput
                  label="Text input label"
                  id="firstInput" />

                <TextInput
                  label="This input is required"
                  id="secondInput"
                  required />

                <TextInput
                  id="email-input"
                  label="Email address"
                  type="email"
                  value="gwashington@potus.com"
                  isValid
                  validators={[EmailValidator]} />

                  <FormGroup hasError>
                    <TextInput
                    id="phone-error"
                    label="ZIP code"
                    value="666"
                    errorMessage="Not a valid ZIP Code"
                    validators={[ZipCodeValidator]} />
                  </FormGroup>
                

                <TextInput
                  id="phone-validator"
                  type="tel"
                  label="Phone number"
                  validators={[PhoneValidator]} />
                </form>
            </DocsPreview>
            <Highlight className="html">
{`<TextInput
  label="Text input label"
  id="firstInput"/>

<TextInput
  label="This input is required"
  id="secondInput"
  required />

<TextInput
  id="email-input"
  label="Email address"
  type="email"
  value="gwashington@potus.com"
  isValid
  validators={[EmailValidator]} />

<FormGroup hasError>
  <TextInput
  id="phone-error"
  label="ZIP code"
  value="666"
  errorMessage="Not a valid ZIP Code"
  validators={[ZipCodeValidator]} />
</FormGroup>

<TextInput
  id="phone-validator"
  type="tel"
  label="Phone number"
  validators={[PhoneValidator]} />`}
            </Highlight>
          </DocsExample>
        </DocsSection>
      </DocsComponent>

      <DocsComponent title="Text area" id="text-area">
        <DocsSection title="Importing">
          <Highlight language="javascript">
            {`import TextArea from '../../uswds/components/TextArea';`}
          </Highlight>
        </DocsSection>

        <DocsSection title="Props">
          <Table columns={['Prop', 'Type', 'Default', 'Description']}>
            <TableRow>
              <TableHeaderCell>label  <Tag>Required</Tag></TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>Text for the input's label</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>id</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>generated unique id</TableCell>
              <TableCell>sets the input's id attribute the label's for attribute</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>value</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>if provided, pre-populates the input with the given string</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>required</TableHeaderCell>
              <TableCell>bool</TableCell>
              <TableCell>false</TableCell>
              <TableCell>adds required label, required attribute, and aria-required='true'</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>errorMessage</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>If provided, triggers the error state and displays the error message</TableCell>
            </TableRow>
          </Table>
        </DocsSection>

        <DocsSection title="Usage">
          <DocsExample>
            <DocsPreview>
              <form className=""></form>
              <TextArea
                label="How did you hear about us?"
                required />
              <FormGroup hasError>
                <TextArea
                  label="How did you hear about us?"
                  errorMessage="Computer says no"
                  value="I googled and actually clicked next page several times until I found you" />
              </FormGroup>
            </DocsPreview>
            <Highlight className="html">
{`<TextArea
  label="How did you hear about us?"
  required />
<FormGroup hasError>
  <TextArea
    label="How did you hear about us?"
    errorMessage="Computer says no"
    value="I googled and actually clicked next page several times until I found you" />
</FormGroup>`}
            </Highlight>
          </DocsExample>
        </DocsSection>
      </DocsComponent>
      
      <DocsComponent title="Dropdown" id="dropdown">
      
        <DocsSection title="Importing">
          <Highlight className="javascript">
            {`import Dropdown from '../../uswds/components/Dropdown';`}
          </Highlight>
        </DocsSection>
        

        <DocsSection title="Props">
          <Table columns={['Prop', 'Type', 'Default', 'Description']}>
            <TableRow>
              <TableHeaderCell>label  <Tag>Required</Tag></TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>the text for the label</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>children  <Tag>Required</Tag></TableHeaderCell>
              <TableCell>node</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>expects a series of <code>option</code> elements</TableCell>
            </TableRow>
            
            <TableRow>
              <TableHeaderCell>id</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>generated unique id</TableCell>
              <TableCell>sets the element's id attribute and the label's for attribute</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>value</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>if provided, pre-populates the input with the given string</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>required</TableHeaderCell>
              <TableCell>bool</TableCell>
              <TableCell>false</TableCell>
              <TableCell>adds required label, required attribute, and aria-required='true'</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>errorMessage</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>If provided, triggers the error state and displays the error message</TableCell>
            </TableRow>
          </Table>
        </DocsSection>

        <DocsSection title="Usage">
          <DocsExample>
            <DocsPreview>
              <form action="" className="usa-form">
              <Dropdown label="Dropdown label" id="dropdown1">
                <option value="value1">Option A</option>
                <option value="value2">Option B</option>
                <option value="value3">Option C</option>
              </Dropdown>

              <Dropdown label="Dropdown label" required id="dropdown2">
                <option value="value1">Option A</option>
                <option value="value2">Option B</option>
                <option value="value3">Option C</option>
              </Dropdown>
              <FormGroup hasError>
                <Dropdown label="Dropdown label" errorMessage="Wrong choice!" value={'value3'} id="dropdown3">
                  <option value="value1">Option A</option>
                  <option value="value2">Option B</option>
                  <option value="value3">Option C</option>
                </Dropdown>
              </FormGroup>
              </form>
            </DocsPreview>
            <Highlight className="html">
{`<Dropdown label="Dropdown label" id="dropdown1">
  <option value="value1">Option A</option>
  <option value="value2">Option B</option>
  <option value="value3">Option C</option>
</Dropdown>

<Dropdown label="Dropdown label" required id="dropdown2">
  <option value="value1">Option A</option>
  <option value="value2">Option B</option>
  <option value="value3">Option C</option>
</Dropdown>

<Dropdown label="Dropdown label" errorMessage="Wrong choice!" value={'value3'} id="dropdown3">
  <option value="value1">Option A</option>
  <option value="value2">Option B</option>
  <option value="value3">Option C</option>
</Dropdown>`}
            </Highlight>
          </DocsExample>
        </DocsSection>
      </DocsComponent>
      
      
      <DocsComponent title="Checkboxes" id="checkboxes">
        <DocsSection title="Importing">
          <h5>The Checkbox component can stand alone</h5>
          <Highlight className="javascript">
            {`import Checkbox from '../../uswds/components/Checkbox';`}
          </Highlight>
          <h5>But wrapping checkboxes inside a Fieldset is encouraged</h5>
          <Highlight className="javascript">
            {`import Fieldset from '../../uswds/components/Fieldset';`}
          </Highlight>
        </DocsSection>
        
        <DocsSection title="Props">
          <Table columns={['Prop', 'Type', 'Default', 'Description']}>
            <TableRow>
              <TableHeaderCell>label  <Tag>Required</Tag></TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>the text for the label</TableCell>
            </TableRow>
            
            <TableRow>
              <TableHeaderCell>id</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>generated unique id</TableCell>
              <TableCell>sets the element's id attribute and the label's for attribute</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>value</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>sets the value attribute. If not provided, the id is used instead</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>name</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>'checkboxes'</TableCell>
              <TableCell>sets the name attribute. Each item in a fieldset should have the same name</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>defaultChecked</TableHeaderCell>
              <TableCell>bool</TableCell>
              <TableCell>false</TableCell>
              <TableCell>if true, the control is selected (checked) by default</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>disabled</TableHeaderCell>
              <TableCell>bool</TableCell>
              <TableCell>false</TableCell>
              <TableCell>if true, disables the control so it can not be toggled</TableCell>
            </TableRow>
          </Table>
        </DocsSection>
        
        <DocsSection title="Usage">
          <DocsExample>
            <DocsPreview>
              <form className="usa-form">
              <Fieldset name="historical-figures-1" legend="Historial figures" legendHidden>
                <Checkbox label="Sojourner Truth" defaultChecked />
                <Checkbox label="Frederick Douglass" defaultChecked />
                <Checkbox label="Booker T. Washington" disabled />
                <Checkbox label="George Washington Carver" />
              </Fieldset>
              </form>
            </DocsPreview>
            <Highlight className="html">
{`<Fieldset name="historical-figures-1" legend="Historial figures" legendHidden>
  <Checkbox label="Sojourner Truth" defaultChecked />
  <Checkbox label="Frederick Douglass" defaultChecked />
  <Checkbox label="Booker T. Washington" disabled />
  <Checkbox label="George Washington Carver" />
</Fieldset>`}
            </Highlight>
          </DocsExample>
        </DocsSection>
      </DocsComponent>
      
      <DocsComponent title="Radio buttons" id="radio-buttons">
        <DocsSection title="Importing">
          <h5>The Radio component can stand alone</h5>
          <Highlight className="javascript">
            {`import Radio from '../../uswds/components/Radio';`}
          </Highlight>
          <h5>But wrapping radio buttons inside a Fieldset is encouraged</h5>
          <Highlight className="javascript">
            {`import Fieldset from '../../uswds/components/Fieldset';`}
          </Highlight>
        </DocsSection>
        
        <DocsSection title="Props">
          <Table columns={['Prop', 'Type', 'Default', 'Description']}>
            <TableRow>
              <TableHeaderCell>label  <Tag>Required</Tag></TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>the text for the label</TableCell>
            </TableRow>
            
            <TableRow>
              <TableHeaderCell>id</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>generated unique id</TableCell>
              <TableCell>sets the element's id attribute and the label's for attribute</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>value</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>sets the value attribute. If not provided, the id is used instead</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>name</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>'radios'</TableCell>
              <TableCell>sets the name attribute. Each item in a fieldset should have the same name</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>defaultChecked</TableHeaderCell>
              <TableCell>bool</TableCell>
              <TableCell>false</TableCell>
              <TableCell>if true, the control is selected (checked) by default</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>disabled</TableHeaderCell>
              <TableCell>bool</TableCell>
              <TableCell>false</TableCell>
              <TableCell>if true, disables the control so it can not be toggled</TableCell>
            </TableRow>
          </Table>
        </DocsSection>
        
        <DocsSection title="Usage">
          <DocsExample>
            <DocsPreview>
              <form className="usa-form">
              <Fieldset name="historical-figures-2" legend="Historial figures" legendHidden>
                <Radio id="truth" label="Sojourner Truth" />
                <Radio id="douglass" label="Frederick Douglass" defaultChecked />
                <Radio id="washington" label="Booker T. Washington" disabled />
                <Radio id="carver" label="George Washington Carver" />
              </Fieldset>
              </form>
            </DocsPreview>
            <Highlight className="html">
{`<Fieldset name="historical-figures-2" legend="Historial figures" legendHidden>
  <Radio id="truth" label="Sojourner Truth" />
  <Radio id="douglass" label="Frederick Douglass" defaultChecked />
  <Radio id="washington" label="Booker T. Washington" disabled />
  <Radio id="carver" label="George Washington Carver" />
</Fieldset>`}
            </Highlight>
          </DocsExample>
        </DocsSection>
      </DocsComponent>
      
      <DocsComponent title="Field set" id="field-set">
        <DocsSection title="Importing">
          <Highlight className="javascript">
            {`import Fieldset from '../../uswds/components/Fieldset';`}
          </Highlight>
        </DocsSection>
        
        <DocsSection title="Props">
          <Table columns={['Prop', 'Type', 'Default', 'Description']}>
            <TableRow>
              <TableHeaderCell>legend  <Tag>Required</Tag></TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>screen-reader only label of what the radio or checkbox group represents. Many screen readers will read the legend for each control, so it shoud be
              brief and descriptive. Required for 508 compliance.</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>legendHidden</TableHeaderCell>
              <TableCell>Boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Toggles display of legend text as a title for the inputs contained within. When hidden, legend acts as a screen-reader only label of what the radio or checkbox group represents. Many screen readers will read the legend for each control, so it shoud be
              brief and descriptive. Required for 508 compliance.</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>children  <Tag>Required</Tag></TableHeaderCell>
              <TableCell>node</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>expects two or more checkboxes or radio buttons</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>name</TableHeaderCell>
              <TableCell>string</TableCell>
              <TableCell>&nbsp;</TableCell>
              <TableCell>applies this name to all the children rather than having to set the name of each child individually</TableCell>
            </TableRow>
          </Table>
        </DocsSection>

        <DocsSection title="Usage">
          <DocsExample>
            <DocsPreview>
              <form className="usa-form">
              <Fieldset name="choices" legend="Best choices" legendHidden>
                <Checkbox id="value1" label="Option A" />
                <Checkbox id="value2" label="Option B" />
                <Checkbox id="value3" label="Option C" />
              </Fieldset>
              </form>
            </DocsPreview>
            <Highlight className="html">
{`<Fieldset name="choices" legend="Best choices" legendHidden>
  <Checkbox id="value1" label="Option A" />
  <Checkbox id="value2" label="Option B" />
  <Checkbox id="value3" label="Option C" />
</Fieldset>`}
            </Highlight>
          </DocsExample>
        </DocsSection>
      </DocsComponent>
    </DocsPage>
  );
}

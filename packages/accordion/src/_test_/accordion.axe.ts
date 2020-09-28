import { OrxeAccordion } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-accordion-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let Accordion;

  beforeEach(async () => {
    OrxeAccordion;
    document.body.appendChild(document.createElement('Accordion'));
    Accordion = document.querySelector('Accordion') as OrxeAccordion;
  });

  afterEach(() => {
    Accordion.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(Accordion);
    expect(result).toHaveNoViolations();
  });
});

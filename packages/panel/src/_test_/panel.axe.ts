import { OrxePanel } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-panel-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let Panel;

  beforeEach(async () => {
    OrxePanel;
    document.body.appendChild(document.createElement('Panel'));
    Panel = document.querySelector('Panel') as OrxePanel;
  });

  afterEach(() => {
    Panel.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(Panel);
    expect(result).toHaveNoViolations();
  });
});

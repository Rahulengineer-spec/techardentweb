// Focus styles for keyboard navigation
export const focusStyles = {
  outline: '2px solid #3b82f6',
  outlineOffset: '2px',
  borderRadius: '0.25rem',
}

// ARIA Labels and Descriptions
export const getAriaLabel = (label: string, description?: string) => {
  return description ? `${label}, ${description}` : label
}

export const getAriaDescribedBy = (id: string) => {
  return `aria-describedby="${id}"`
}

export const getAriaControls = (id: string) => {
  return `aria-controls="${id}"`
}

export const getAriaLabeledBy = (id: string) => {
  return `aria-labelledby="${id}"`
}

export const getAriaDescription = (description: string) => {
  return `aria-description="${description}"`
}

export const getAriaDetails = (details: string) => {
  return `aria-details="${details}"`
}

export const getAriaErrorMessage = (error: string) => {
  return `aria-errormessage="${error}"`
}

// ARIA States
export const getAriaExpanded = (expanded: boolean) => {
  return `aria-expanded="${expanded}"`
}

export const getAriaHidden = (hidden: boolean) => {
  return `aria-hidden="${hidden}"`
}

export const getAriaLive = (polite: boolean = true) => {
  return `aria-live="${polite ? 'polite' : 'assertive'}"`
}

export const getAriaCurrent = (current: boolean) => {
  return `aria-current="${current ? 'page' : 'false'}"`
}

export const getAriaRequired = (required: boolean) => {
  return `aria-required="${required}"`
}

export const getAriaInvalid = (invalid: boolean) => {
  return `aria-invalid="${invalid}"`
}

export const getAriaBusy = (busy: boolean) => {
  return `aria-busy="${busy}"`
}

export const getAriaPressed = (pressed: boolean) => {
  return `aria-pressed="${pressed}"`
}

export const getAriaSelected = (selected: boolean) => {
  return `aria-selected="${selected}"`
}

export const getAriaChecked = (checked: boolean) => {
  return `aria-checked="${checked}"`
}

export const getAriaDisabled = (disabled: boolean) => {
  return `aria-disabled="${disabled}"`
}

export const getAriaReadOnly = (readOnly: boolean) => {
  return `aria-readonly="${readOnly}"`
}

// ARIA Relationships
export const getAriaOwns = (owns: string) => {
  return `aria-owns="${owns}"`
}

export const getAriaFlowTo = (flowTo: string) => {
  return `aria-flowto="${flowTo}"`
}

export const getAriaActiveDescendant = (descendant: string) => {
  return `aria-activedescendant="${descendant}"`
}

// ARIA Properties
export const getAriaMultiSelectable = (multiSelectable: boolean) => {
  return `aria-multiselectable="${multiSelectable}"`
}

export const getAriaOrientation = (orientation: 'horizontal' | 'vertical') => {
  return `aria-orientation="${orientation}"`
}

export const getAriaSort = (sort: 'ascending' | 'descending' | 'none') => {
  return `aria-sort="${sort}"`
}

export const getAriaHasPopup = (hasPopup: boolean) => {
  return `aria-haspopup="${hasPopup}"`
}

export const getAriaModal = (modal: boolean) => {
  return `aria-modal="${modal}"`
}

export const getAriaMultiline = (multiline: boolean) => {
  return `aria-multiline="${multiline}"`
}

export const getAriaPlaceholder = (placeholder: string) => {
  return `aria-placeholder="${placeholder}"`
}

// ARIA Values
export const getAriaValueNow = (value: number) => {
  return `aria-valuenow="${value}"`
}

export const getAriaValueMin = (min: number) => {
  return `aria-valuemin="${min}"`
}

export const getAriaValueMax = (max: number) => {
  return `aria-valuemax="${max}"`
}

export const getAriaValueText = (text: string) => {
  return `aria-valuetext="${text}"`
}

// ARIA Grid Properties
export const getAriaColSpan = (span: number) => {
  return `aria-colspan="${span}"`
}

export const getAriaRowSpan = (span: number) => {
  return `aria-rowspan="${span}"`
}

export const getAriaColIndex = (index: number) => {
  return `aria-colindex="${index}"`
}

export const getAriaRowIndex = (index: number) => {
  return `aria-rowindex="${index}"`
}

export const getAriaColCount = (count: number) => {
  return `aria-colcount="${count}"`
}

export const getAriaRowCount = (count: number) => {
  return `aria-rowcount="${count}"`
}

// ARIA Set Properties
export const getAriaSetSize = (size: number) => {
  return `aria-setsize="${size}"`
}

export const getAriaPosInSet = (pos: number) => {
  return `aria-posinset="${pos}"`
}

export const getAriaLevel = (level: number) => {
  return `aria-level="${level}"`
}

// ARIA Drag and Drop
export const getAriaGrabbed = (grabbed: boolean) => {
  return `aria-grabbed="${grabbed}"`
}

export const getAriaDropEffect = (effect: 'copy' | 'move' | 'link' | 'execute' | 'popup' | 'none') => {
  return `aria-dropeffect="${effect}"`
}

// ARIA Live Region Properties
export const getAriaAtomic = (atomic: boolean) => {
  return `aria-atomic="${atomic}"`
}

export const getAriaRelevant = (relevant: 'additions' | 'removals' | 'text' | 'all') => {
  return `aria-relevant="${relevant}"`
} 
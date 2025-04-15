/**
 * App color constants
 */
export const colors = {
  // Background colors
  mainBg: '#0E0D0D',
  secondaryBg: '#161618',
  tertiaryBg: '#222324',
  greenishBg: '#1A1B18',
  
  // Accent colors
  accent1: '#DAFD7F',
  accent2: '#596F24',
  
  // Text colors
  greyText: '#5B5C5C',
  whiteText: '#FFFFFF',

  borderColor: '#525252',
  
  // Function to get CSS variable value
  getCssVar: (varName: string): string => {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  }
}; 
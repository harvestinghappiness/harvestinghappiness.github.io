export const maxWidth = 1120;

export const COLORS = {
  bodyDark: "#202020",
};

export function getButtonStyle(color = "white"): string {
  return `
  color: ${color};
  border: solid 2px ${color};
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.1);
  }
  `;
}

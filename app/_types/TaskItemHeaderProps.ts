export type TaskItemHeaderProps = {
  taskTitle: string;
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  dropdownOptions: string[];
  handleMoveTask: (option: string) => void;
};

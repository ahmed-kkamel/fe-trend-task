export interface AddTaskPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, description: string, status: string) => void;
}

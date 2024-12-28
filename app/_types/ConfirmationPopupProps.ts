export type ConfirmationPopupProps = {
  isOpen: boolean;
  taskToDelete: { title: string } | null;
  onConfirm: () => void;
  onCancel: () => void;
};

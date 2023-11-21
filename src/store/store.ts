import { create } from "zustand";

let store = (set: any) => ({
  loading: false,
  loadingHandler: (load: any) => set((state: any) => ({ loading: load })),
  userRole: "",
  serUserRole: (role: any) => set((state: any) => ({ userRole: role })),

  openMode: false,
  openModeHandler: (open: any) => set((state: any) => ({ openMode: open })),
  warningDialogInfo: {
    open: false,
    title: "",
    body: "",
    onAcceptDispatch: () => {},
  },
  setWarningDialogHandler: (info: any) =>
    set((state: any) => ({ warningDialogInfo: info })),

  closeWarningDialogHandler: () =>
    set((state: any) => ({
      warningDialogInfo: {
        open: false,
        title: "",
        body: "",
        onAcceptDispatch: () => {},
      },
    })),
    snackbarInfo: {
      open: false,
      message: '',
      severity: '',
      duration: 3,
    },
    setSnackbarInfo: (info: any) => set((state: any) => ({ snackbarInfo: info })),
    closeSnackbar: () =>
      set((state: any) => ({
        snackbarInfo: {
          open: false,
          message: '',
          severity: '',
          duration: 3,
        },
      })),
});

const useStore = create(store);

export default useStore;

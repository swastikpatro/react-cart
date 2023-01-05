import { toast } from 'react-hot-toast';
import { CgClose } from 'react-icons/cg';
import { toastFunc } from './types';

function useToast() {
  const customToast: toastFunc = (toastType, toastMsg) => {
    if (toastType === 'success') {
      toast.success((t) => (
        <span>
          {toastMsg}
          <button
            className='toast-dismiss-btn toast-success-dismiss-btn'
            onClick={() => toast.dismiss(t.id)}
          >
            <CgClose />
          </button>
        </span>
      ));
      return;
    }
    if (toastType === 'error') {
      toast.error((t) => (
        <span>
          {toastMsg}
          <button
            className='toast-dismiss-btn toast-error-dismiss-btn'
            onClick={() => toast.dismiss(t.id)}
          >
            <CgClose />
          </button>
        </span>
      ));
      return;
    }
    if (toastType === 'loading') {
      toast.loading((t) => (
        <span>
          {toastMsg}
          <button
            className='toast-dismiss-btn'
            onClick={() => toast.dismiss(t.id)}
          >
            <CgClose />
          </button>
        </span>
      ));
      return;
    }
    if (toastType === 'custom') {
      toast((t) => (
        <span>
          {toastMsg}
          <button
            className='toast-dismiss-btn'
            onClick={() => toast.dismiss(t.id)}
          >
            <CgClose />
          </button>
        </span>
      ));
      return;
    }
    if (toastType === 'remove-all') {
      toast((t) => (
        <span>
          <span style={{ fontSize: '1.25rem' }}>🗑️</span> Removed all
          <span style={{ textDecoration: 'line-through' }}>{toastMsg}</span>
          <button
            className='toast-dismiss-btn'
            onClick={() => toast.dismiss(t.id)}
          >
            <CgClose />
          </button>
        </span>
      ));
      return;
    }
    if (toastType === 'remove-single') {
      toast((t) => (
        <span>
          <span style={{ fontSize: '1.25rem' }}>🗑️</span>Removed 1
          <span style={{ textDecoration: 'line-through' }}>{toastMsg}</span>
          <button
            className='toast-dismiss-btn'
            onClick={() => toast.dismiss(t.id)}
          >
            <CgClose />
          </button>
        </span>
      ));
      return;
    }
  };

  return customToast;
}

export default useToast;

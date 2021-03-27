import Swal from "sweetalert2";

export function toast(isSuccessToast: boolean, message: string) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: alert => {
      alert.addEventListener('mouseenter', Swal.stopTimer)
      alert.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  if (!isSuccessToast) {
    Toast.fire({
      icon: 'error',
      title: message
    });

    return;
  }

  Toast.fire({
    icon: 'success',
    title: message
  });
}
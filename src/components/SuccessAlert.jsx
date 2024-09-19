import Swal from "sweetalert2"

const SuccessAlert = () => {
    Swal.fire({
        title: "成功",
        text: "商品已加入購物車!",
        icon: "success",
        showConfirmButton: false,
        timer: 1000
      });
}

export default SuccessAlert

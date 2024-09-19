import Swal from 'sweetalert2';


export const DeleteItemModal = (item, deleteItem, getItems) => {
    let title;
    if(item.title){
      title = item.title;
    } else {
      const productKey = Object.keys(item.products)[0];
      title = item.products[productKey]?.product?.title;
    }

    Swal.fire({
        title: `確定要刪除 "${title}" ?`,
        text: "刪除後將無法復原!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "確定",
        cancelButtonText: "取消"
      }).then((result) => {
        if (result.isConfirmed) {
         deleteItem(item.id)
         getItems()
         .then(()=>{
            Swal.fire({
                title: "刪除成功!",
                text: "已成功刪除品項",
                icon: "success"
              });
         })
       
         .catch(err =>{
            Swal.fire({
                title: "刪除失敗!",
                text: err.message,
                icon: "error"
              });
         })
        }
      });
}

export default DeleteItemModal

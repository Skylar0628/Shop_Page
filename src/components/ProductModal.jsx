import React from 'react'

const ProductModal = ({closeProductModal}) => {
  return (
      <div className="modal" tabindex="-1" id='productModal'>
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close"  aria-label="Close" onClick={closeProductModal}></button>
            </div>
            <div className="modal-body">
                <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeProductModal}>取消</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
  )
}

export default ProductModal

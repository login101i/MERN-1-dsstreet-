import React, { Fragment } from 'react'

const ModalSizes = () => {
    return (
        <Fragment>

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Tabela rormiarów</button>

            <div className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <img src="https://res.cloudinary.com/mckrus/image/upload/v1612355896/dsstreet/tabela_rozmiar%C3%B3w_dsstreet_f8ptzy.jpg"
                            style={{ minWidth: "600px" }}
                            className="img-fluid w-100 "
                            alt="" />
                    </div>
                </div>
            </div>



        </Fragment>
    )
}

export default ModalSizes

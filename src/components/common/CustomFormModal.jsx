import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

/**
 * showModalOpenerBtn : if true then modal opener button will not be shown and modal will be opened
 */
const CustomFormModal = ({
  id,
  modalBtnName,
  modalTitle,
  modalSubmitBtnName,
  modalCancelBtnName,
  modalBody: ModalBody,
  modalBodyAttr,
  handleOnModalOpen,
  handleOnModalFormSubmit,
  handleOnModalClose,
  showModalOpenerBtn,
}) => {
  const [showModal, setShowModal] = useState(showModalOpenerBtn ? false : true);
  const [isFormSubmittedOnce, setIsFormSubmittedOnce] = useState(false);

  useEffect(() => {
    setIsFormSubmittedOnce(false);
  }, [showModal]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log("onProdDtlSubmit", data);
    handleOnModalClose(id);
    setShowModal(false);
    handleOnModalFormSubmit(id, data);
  };

  const submitBtnRef = useRef();
  const cancelBtnRef = useRef();
  /**
   * Stop enter submitting the form on key down.
   * @param keyEvent Event triggered when the user presses a key.
   */
  const handleOnKeyDown = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };
  const handleKeyUp = (event) => {
    // Enter - Submit Btn Click on Enter key up
    if (event.keyCode === 13) {
      submitBtnRef.current.click();
    }

    // Esc - Cancel Btn Click on Esc Key up
    else if (event.keyCode === 27) {
      cancelBtnRef.current.click();
    }
  };

  const handleOnClosingModal = () => {
    handleOnModalClose(id);
    setShowModal(false);
  };

  return (
    <div id={id} className="w-full h-full m-2 flex justify-center items-center">
      {showModalOpenerBtn && (
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => {
            handleOnModalOpen && handleOnModalOpen();
            setShowModal(true);
          }}
        >
          {modalBtnName}
        </button>
      )}
      {showModal ? (
        <form
          onKeyUp={handleKeyUp}
          onKeyDown={handleOnKeyDown}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="sm:w-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-[400px] sm:w-[550px] relative my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {modalTitle}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => handleOnClosingModal()}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <ModalBody
                  {...modalBodyAttr}
                  register={register}
                  formErrors={errors}
                  isFormSubmittedOnce={isFormSubmittedOnce}
                />
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    ref={cancelBtnRef}
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      handleOnClosingModal();
                    }}
                  >
                    {modalCancelBtnName}
                  </button>
                  <button
                    ref={submitBtnRef}
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => {
                      setIsFormSubmittedOnce(true);
                    }}
                  >
                    {modalSubmitBtnName}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </form>
      ) : null}
    </div>
  );
};

export default CustomFormModal;

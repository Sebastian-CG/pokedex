import { useState } from "react";

function useModal(initialValue = false) {
  const [visibleModal, setVisibleModal] = useState(initialValue);

  const openModal = () => setVisibleModal(true);
  const closeModal = () => setVisibleModal(false);

  return [visibleModal, openModal, closeModal];
}

export default useModal;

import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { actions as modalActions } from "@/redux/slices/modal/modal.slice";
import { actions as selectedIdActions } from "@/redux/slices/selected-id/selectedId.slice";
import React from "react";

const rootActions = {
  ...modalActions,
  ...selectedIdActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return React.useMemo(() => {
    return bindActionCreators(rootActions, dispatch);
  }, [dispatch]);
};

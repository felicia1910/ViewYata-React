import { u as useAppDispatch, a as useAppSelector, s as selectIsCommonModalOpen, b as useNavigate, c as selectImgUrl, j as jsx, A as AnimatedModalOverlay, d as jsxs, e as closeCommonModal, o as openLoginModal } from "./index-27baec74.js";
const SessionExpiredModal = () => {
  const dispatch = useAppDispatch();
  const commonModal = useAppSelector(selectIsCommonModalOpen);
  const windowType = useAppSelector((state) => state.control.windowSize);
  const router = useNavigate();
  const imgUrl = useAppSelector(selectImgUrl);
  const height = 400;
  return /* @__PURE__ */ jsx(AnimatedModalOverlay, { showModal: commonModal, height, children: /* @__PURE__ */ jsxs("div", { className: "relative h-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 flex items-center justify-center w-full bg-white border-b-[0.5px] h-[56px] border-yata-brown/[.4]", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xl font-semibold", children: "重新登入" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "absolute flex items-center justify-center w-8 h-8 right-4",
          onClick: () => dispatch(closeCommonModal()),
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: imgUrl + "/loginAndJoin/login/close.svg",
              className: "object-contain"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { height: height - 56 }, className: "flex flex-col items-center justify-center w-full", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center pb-10 text-lg font-bold", children: "帳戶驗證過期，請重新登入" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-full mb-5", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            dispatch(closeCommonModal());
            windowType == "mobile" ? router("/login") : dispatch(openLoginModal());
          },
          className: "flex items-center justify-center w-full h-12 max-w-sm px-4 py-2 mx-6 mb-2 text-left text-white border rounded-lg hover:border-2 hover:border-yata bg-yata-deep",
          children: /* @__PURE__ */ jsx("div", { className: "font-medium", children: "重新登入" })
        }
      ) })
    ] })
  ] }) });
};
export {
  SessionExpiredModal as default
};

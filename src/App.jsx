import React, { useEffect, useState } from "react";
import { ColorfulMessageFun } from "./compornents/ColorfulMessage";

const App = () => {
  // state: [state変数, セット関数] = useState(初期値);
  // stateが変わるとき、propsが変わるときに再レンダリングされる
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  // effect: useEffect(() = > {}, [state変数])
  // 指定したstate変数が更新された場合のみ実行される（空なら1度だけ実行）
  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faceShowFlg || setFaceShowFlg(true);
    } else {
      faceShowFlg && setFaceShowFlg(false);
    }
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  // イベント
  const onClickCountUp = () => setNum(num + 1);
  const onClickSwichShowFlg = () => setFaceShowFlg(!faceShowFlg);

  // html返却
  return (
    // 1つのタグのみ返す(FragmentでかこめばOK)
    <>
      <h1 style={{ color: "red" }}>こんにちは！！！</h1>
      {/* props渡してcompornentを呼ぶ */}
      {/* children渡してcompornentを呼ぶこともできる */}
      <ColorfulMessageFun color="blue">お元気ですか？</ColorfulMessageFun>
      <ColorfulMessageFun color="pink">お元気ですよ</ColorfulMessageFun>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <br />
      <button onClick={onClickSwichShowFlg}>on/off</button>
      {faceShowFlg && <p>( *´艸｀)</p>}
    </>
  );
};

// exportで他ファイルでも関数を使える
export default App;

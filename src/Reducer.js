import React from "react";
import { connect } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";
import { incrementA } from "./reducers/actionCreators";
import {
  INCREMENTA,
  DECREMENTA,
  INCREMENTB,
  DECREMENTB,
} from "./reducers/actionTypes";

class Reducer extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  render() {
    return (
      <>
        <p>
          countA: {this.props.countA}, countB: {this.props.countB}
        </p>
        <button onClick={this.props.dispatchA}>INCREMENTA</button>
        <button onClick={this.props.dispatchB}>INCREMENTB</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countA: state.rA.countA,
    countB: state.rB.countB,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchA: () => dispatch(incrementA()),
    dispatchB: () => dispatch({ type: INCREMENTB }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reducer);

// export default function Reducer() {
//   const countA = useSelector((state) => state.rA.countA);
//   const countB = useSelector((state) => state.rB.countB);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <p>countA : {countA}</p>
//       <p>countB : {countB}</p>
//       <>
//         <button onClick={() => dispatch({ type: INCREMENTA })}>
//           Increment A
//         </button>
//         <button onClick={() => dispatch({ type: INCREMENTB })}>
//           Increment B
//         </button>
//       </>
//       <br />
//       <>
//         <button onClick={() => dispatch({ type: DECREMENTA })}>
//           Decrement A
//         </button>
//         <button onClick={() => dispatch({ type: DECREMENTB })}>
//           Decrement B
//         </button>
//       </>
//     </div>
//   );
// }

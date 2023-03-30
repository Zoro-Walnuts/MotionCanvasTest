import {makeScene2D} from '@motion-canvas/2d/lib/scenes';
import {Node, Circle, Grid, Line, Txt} from '@motion-canvas/2d/lib/components';
import {all} from '@motion-canvas/core/lib/flow';
import {Vector2} from '@motion-canvas/core/lib/types';
import {createRef} from '@motion-canvas/core/lib/utils';
import {createSignal} from '@motion-canvas/core/lib/signals';

const RED = '#ff6470';
const GREEN = '#99C47A';
const BLUE = '#68ABDF';

export default makeScene2D(function* (view) {
  const myCircle = createRef<Circle>();
  const scale = createSignal(1);

  view.add(
    <Node x={-100} ref={myCircle}>
      <Circle
        width={() => scale() * 120}
        height={() => scale() * 120}
        stroke={BLUE}
        lineWidth={4}
        startAngle={110}
        endAngle={340}
      />
      <Line
        stroke={RED}
        lineWidth={4}
        endArrow
        arrowSize={10}
        points={[Vector2.zero, () => Vector2.right.scale(scale() * 70)]}
      />
      <Txt
        fontWeight={400}
        fontSize={() => scale() * 50}
        padding={20}
        fontFamily={'Candara'}
        fill={'#DDD'}
        text={'TIME'}
      ></Txt>
    </Node>


  );

  yield* myCircle().position.x(100, 0.8);
  yield* myCircle().rotation(30, 0.8);
  yield* scale(2, 0.8);
  yield* myCircle().position.x(-100, 0.8);
  yield* all(myCircle().rotation(0, 0.8), scale(1, 0.8));
});
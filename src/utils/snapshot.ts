import { Sequence } from "../types";

export const progressSnapshot: any = {
  beyondWords: -1,
  mouseWheelIcon: -1,
};

export function isComponentUpdate(name: string, progress: number, sequence: Sequence) {
  for (const s of sequence) {
    const [start, end] = s.interval;
    if (progress >= start && progress <= end) {
      progressSnapshot[name] = -1;
      return progress;
    }
  }
  // 처음 나왔을때 스냅샷에 저장하고 리턴
  if (progressSnapshot[name] === -1) {
    progressSnapshot[name] = progress;
    return progress;
  } else {
    // 계속 나와있을 때 or 한번도 안들어갔을 때에는 스냅샷 리턴
    return progressSnapshot[name];
  }
}

import dynamic from "next/dynamic";

const Model = dynamic(() => import("../components/BhkModel"), { ssr: false });

export default function bhk() {
  return <Model />;
}

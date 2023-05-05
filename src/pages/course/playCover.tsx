import {AiFillPlayCircle} from "react-icons/all";
import {Link} from "react-router-dom";

const PlayCover = ({src, size}: { src: string, size: "small" | "medium" }) => {
  return (<Link to={`/course-detail`}>
    <div className={"relative"}>
      <img src={src} className="w-full aspect-video object-cover "/>
      {size == 'small' &&
        <AiFillPlayCircle className={"absolute-xy text-4xl p-px bg-white rounded-full"}/>
      }
      {size == 'medium' &&
        <AiFillPlayCircle className={"absolute-xy text-6xl p-px bg-white rounded-full"}/>
      }
    </div>
  </Link>)
}
export default PlayCover
import MyComment from "./Comment";

const MainPost=()=>{
return (<div>
     {/* post container */}
     <div className="mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y">
{/* ส่วนของเจ้าของ post */}
<div className="space-y-2">
  {/* image and name */}
  <div className="flex space-x-2 items-center">
    <img className="w-12 h-12 rounded-full" src="/profileImages/MainChamp.png"></img>
    <span className='font-semibold text-lg text-white'>Latthaphol Laohapiboonrattana 630610759</span>
  </div>
  {/* status message */}
  <p className='text-white'>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</p>
  {/* like section */}
  <div className='flex items-center'>
    <img className='w-4 h-4 mr-1' src='/like.svg'></img>
    <p className='text-gray-300'>100 คน</p>
  </div>
</div>
<MyComment/>
</div>
</div>);
}
export default MainPost;
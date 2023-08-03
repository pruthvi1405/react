import ImageShow from './ImageShow';

const ImageList=({objects})=>{
        const allImages=objects.map((item)=>{
            return <ImageShow key={item.id} details={item}/>
        })

        return allImages;
    }


export default ImageList;
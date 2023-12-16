import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              alt="img"
              src={
                "http://192.168.0.12:1337"+
                item.attributes.img.data.attributes.url
              }
            />
            <span className="name text-white">{  
            
                item.attributes.title + ' Laptop'
                }</span>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Category;

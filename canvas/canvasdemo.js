const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
c.fillStyle = grd;
var grd = c.createLinearGradient(0, 0, 900, 100);
grd.addColorStop(0, "yellow");
grd.addColorStop(1, "red");
// đổ màu cho canvas
// c.fillRect(0,0,canvas.width, canvas.height);

// điểm bắt đầu đường kẻ
c.moveTo(20, 30);
//điểm keetd thúc đường kẻ
c.lineTo(400, 30);
//gọi ra ddường kẻ
c.stroke()

//vẽ hình chữ nhật 
//c.strokeRect(điểm bắt đầu của hcn trên trục x, điểm bắt đầu của hcn trên trục y,điểm kết thúc của hcn trên trục x, điểm kết thúc của hcn trên trục y ) điểm bắt đầu nằm ở góc phần tư thứ 1 và điểm kết thúc nằm ở góc phần tư thứ 4
c.strokeRect(50, 100, 300, 200)
//fill để đổ màu cho hình vẽ, màu đc thêm bên trên
c.fillRect(400, 100, 300, 200)

//vẽ hình tròn
//bắt đầu vẽ
c.beginPath()
// 1,2 là vị trí tâm của bán kính, 3 là bán kính đường tròn, 4, 5 là giá trị mặc định.
// nếu PI không nhân 2 ta được nửa đường tròn
// c.arc(1,2,3,4,5)
// c.arc(500,400,60,0,Math.PI)
c.arc(700, 400, 60, 0, Math.PI * 2)
// c.fill();
c.stroke() // thêm viền cho hình tròn
c.closePath();     //end vẽ hinh tròn

// xóa các hình nằm trong phạm vi hình chữ nhật
c.clearRect(100, 100, 100, 500);
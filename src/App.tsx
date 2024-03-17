import myImg from './assets/CV.jpg';

import { GitHub } from 'react-feather';
import { Facebook } from 'react-feather';
import { Youtube } from 'react-feather';

import './App.css';

function App() {
  return (
    <>
      <header>
			<div className="img-container">
				<img src={myImg}  alt="" className="img avatar" />
			</div>
			<div className="title-container">
				<h1>NGUYỄN QUANG LINH</h1>
				<h2>Front-End Developer</h2>
			</div>
		</header>

		<div className="container">
			<div className="sider">
				<div className="sider-content">
					<h1 className="tag-fill">Thông tin liên hệ</h1>
					<div className="tag-content">
						<ul>
							<li>10/10/2003</li>
							<li>nguyenlinh2k31111@gmail.com</li>
							<li>Chư Pưh - Gia Lai</li>
							<li>0329377003</li>
						<a href="https://github.com/Ylnom">	<GitHub /></a>
            <a href="https://www.facebook.com/qhnil/">	<Facebook /></a>
            <a href="https://www.youtube.com/channel/UCV6mNIeboSyPNs7tBFgf-IA">	<Youtube /></a>
						</ul>
					</div>
				</div>
				<div className="sider-content">
					<h1 className="tag-fill">Kỹ Năng</h1>
					<div className="tag-content progress-container">
						<p className="progress-title">Khả năng làm việc nhóm</p>
						<div className="progress-wrap">
							<div className="progress" style={{ width: '80%' }}></div>
						</div>
					</div>
					<div className="tag-content progress-container">
						<p className="progress-title">Sáng tạo</p>
						<div className="progress-wrap">
							<div className="progress" style={{ width: '50%' }}></div>
						</div>
					</div>
					<div className="tag-content progress-container">
						<p className="progress-title">Xử lý công việc tốt</p>
						<div className="progress-wrap">
							<div className="progress" style={{ width: '80%' }}></div>
						</div>
					</div>
					<div className="tag-content progress-container">
						<p className="progress-title">Thiết kế đồ họa</p>
						<div className="progress-wrap">
							<div className="progress" style={{ width: '50%' }}></div>
						</div>
					</div>
          <div className="tag-content progress-container">
						<p className="progress-title">Tin học văn phòng</p>
						<div className="progress-wrap">
							<div className="progress" style={{ width: '90%' }}></div>
						</div>
					</div>
				</div>
				<div className="sider-content">
					<h1 className="tag-fill">Kiến thức</h1>
					<div className="tag-content">
						
							<ul className="text-content">
								<li>HTML5 - CSS3</li>
								<li>JavaScript</li>
				<li>Nodejs</li>
				<li>ES6</li>
				<li>Typescript</li>
						</ul>
					</div>
				</div>
        <div className="sider-content">
					<h1 className="tag-fill">Chứng chỉ</h1>
					<div className="tag-content">
						
						<ul className="text-content">
						
              <li> Chứng chỉ Tiếng Anh Toeic</li>
							
              <li>Chứng chỉ Tin học văn phòng</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="content">
				<div>
					<h1 className="tag">Giới thiệu</h1>
					<p className="text-content">
          Tôi là một cá nhân có tinh thần sáng tạo, nhiệt huyết và cam kết với việc phát triển 
          bản thân và đóng góp vào môi trường làm việc.Sự đam mê của tôi không chỉ nằm trong việc 
          phát triển kỹ năng chuyên môn mà còn trong việc xây dựng và duy trì mối quan hệ đồng nghiệp 
          tích cực.
					</p>
				</div>
				<div className="description-content">
					<h1 className="tag">Học Vấn</h1>
					
					
							<div className="tabbar-title">
								
							
							</div>
							<h3>FPT POLYTECHNIC ĐÀ NẴNG</h3>
							<p className="text-content">
								Ngành học: THIẾT KẾ WEBSITE
							</p>
              <p className="text-content">
								Điểm trung bình: 7.7
							</p>
              <p className="text-content">
								Thời gian: 01/2021 - 06/2024
							</p>
              
							
				</div>
				<div className="description-content">
					<h1 className="tag">Kinh nghiệm làm việc</h1>
					<ul>
						<li>
							<div className="tabbar-title">
								<p className="text-content">Website Bán Đồ Công Nghệ</p>
								<p className="text-date">03/2021 - 03/2022</p>
							</div>
							<h3>Công nghệ</h3>
							<p className="text-content">
              Json-server, ECMAscript 6, HTML5-CSS3
							</p>
              <h3>Kết quả</h3>
              <p className="text-content">
              Xây dựng website dựa trên khuôn khổ môn ECMAscript 6
							</p>
              </li>
							</ul>
              <ul>
						<li>
							<div className="tabbar-title">
								<p className="text-content">Game trí nhớ Pikachu</p>
								<p className="text-date">07/2022 - 03/2023</p>
							</div>
							<h3>Công nghệ</h3>
							<p className="text-content">
              Nodejs,Typescript , HTML5-CSS3
							</p>
              <h3>Kết quả</h3>
              <p className="text-content">
              Xây dựng website dựa trên khuôn khổ môn NodeJs
							</p>
              </li>
							</ul>
              
              <ul>
						<li>
							<div className="tabbar-title">
								<p className="text-content">Website Tìm Sách</p>
								<p className="text-date">03/2023 - 07/2023</p>
							</div>
							<h3>Công nghệ</h3>
							<p className="text-content">
              Typescript, ReactJs
							</p>
              <h3>Kết quả</h3>
              <p className="text-content">
              Xây dựng được game trí nhớ.
							</p>
              </li>
							</ul>
              
				</div>
        <div className="description-content">
					<h1 className="tag">Hoạt động</h1>
          <h4>HỘI TỪ THIỆN SINH VIÊN ĐÀ NẴNG</h4>
          </div>
          <p>Thành viên | 12/2023 - 1/2024</p>
          <p>Cùng mọi người tới Trường Tu Nương - Trà Tập- Trà My- Quảng Nam, để hoạt động mua đồ tiếp ứng ngày tết cùng các trẻ em miền núi.</p>
			</div>
		</div>
	
    </>
  );
}


export default App;

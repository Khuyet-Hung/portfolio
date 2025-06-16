import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  vi: {
    translation: {
      title: 'Portfolio cá nhân',
      home: {
        greeting: 'Xin chào! Tôi là Nguyễn Văn A',
        shortIntro: 'Lập trình viên Frontend đam mê sáng tạo và công nghệ.',
        name: 'Nguyễn Huỳnh Khuyết Hùng',
        role: 'Web Developer'
      },
      about: {
        title: 'Giới thiệu',
        myPortfolio: 'Thông tin của tôi',
        detail: 'Tôi là lập trình viên với nhiều năm kinh nghiệm phát triển web.',
        educationTitle: 'Quá trình học tập',
        education: [
          'Đại học Công nghệ Thông tin',
          'Chuyên ngành Khoa học máy tính'
        ],
        careerTitle: 'Kinh nghiệm làm việc',
        career: [
          'Frontend Developer tại Công ty ABC',
          'Thực tập sinh tại Công ty XYZ'
        ],
        skillsTitle: 'Kỹ năng nổi bật',
        skills: [
          'Giao tiếp tốt',
          'Làm việc nhóm',
          'Tư duy giải quyết vấn đề'
        ]
      },
      skills: {
        title: 'Kỹ Năng Công Nghệ'
      },
      projects: {
        heading: 'Dự án',
        link: 'Xem chi tiết',
        list: [
          {
            name: 'Quản lý công việc',
            desc: 'Ứng dụng quản lý công việc cá nhân.',
            img: '',
            link: '#'
          },
          {
            name: 'Website bán hàng',
            desc: 'Website bán hàng trực tuyến.',
            img: '',
            link: '#'
          },
        ],
      },
      contact: {
        title: 'Liên hệ',
        form: {
          name: 'Họ tên',
          email: 'Email',
          message: 'Nội dung',
          send: 'Gửi',
          sent: 'Đã gửi thành công!'
        }
      },
      theme: 'Đổi theme',
      link: '[Liên kết]'
    },
  },
  en: {
    translation: {
      title: 'My Portfolio',
      home: {
        greeting: 'Hello! I am Nguyen Van A',
        shortIntro: 'A passionate Frontend Developer who loves creativity and technology.',
        name: 'Nguyen Huynh Khuyet Hung',
        role: 'Web Developer'
      },
      about: {
        title: 'About',
        myPortfolio: 'My Portfolio',
        detail: 'I am a developer with years of experience in web development.',
        educationTitle: 'Education',
        education: [
          'University of Information Technology',
          'Major in Computer Science'
        ],
        careerTitle: 'Career',
        career: [
          'Frontend Developer at ABC Company',
          'Intern at XYZ Company'
        ],
        skillsTitle: 'Key Skills',
        skills: [
          'Good communication',
          'Teamwork',
          'Problem-solving thinking'
        ]
      },
      skills: {
        title: 'Tech Skills'
      },
      projects: {
        heading: 'Projects',
        link: 'View details',
        list: [
          {
            name: 'Task Manager',
            desc: 'A personal task management app.',
            img: '',
            link: '#'
          },
          {
            name: 'E-commerce Website',
            desc: 'An online shopping website.',
            img: '',
            link: '#'
          },
        ],
      },
      contact: {
        title: 'Contact',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          send: 'Send',
          sent: 'Message sent successfully!'
        }
      },
      theme: 'Switch theme',
      link: '[Link]'
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

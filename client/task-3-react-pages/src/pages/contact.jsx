import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    gender: '',
    course: '',
    address: ''
});

  return (
    <div className="contact-page">
      <h1>Student Registration Form</h1>
      <p>Get in touch with us if you have any questions.</p>

      <form 
       className="contact-form"
       onSubmit={(e) => {
         e.preventDefault();
         alert(`Registration successful for $
      {formData.fullName}!`);
        }}
      >  

        <div className="form-group">
          <label htmlFor="name">Name:</label>

          <input
            id="name"
            name="fullName"
            type="text"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })
          }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">mobileNumber:</label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
           <label htmlFor="gender">Gender:</label>
           <select
             id="gender"
             name="gender"
             value={formData.gender}
             onChange={(e) => 
             setFormData({ ...formData, gender: 
             e.target.value })}
             
             required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
       </div>

        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })
            }
            required
          >
           <option value="">Select Course</option>
           <option value="CSE">Computer Science (CSE)</option>
           <option value="AIML">Artificial Intelligence & Machine Learning</option>
           <option value="ECE">Electronics & Communication (ECE)</option>
           <option value="EEE">Electrical & Electronics (EEE)</option>
           <option value="Other">Other</option>
        </select>
      </div>

       <div className="form-group">
         <label htmlFor="address">Address:</label>
         <textarea
           id="address"
           name="address"
           placeholder="Enter your full address"
           rows="3"
           value={formData.address}
           onChange={(e) => setFormData({ ...formData, address: e.target.value })
           }
           required
        />
      </div>

        <button type="submit">Register Student</button>
      </form>
    </div>
  );
}

export default Contact;

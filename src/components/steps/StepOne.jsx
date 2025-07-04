import "./StepOne.css";



export default function StepOne() {
    // console.log("rendering step one")

  return (
    <div className="step-one">
        <form className="form-grid" aria-label="Personal Information Form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="e.g. Stephen King"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="e.g. stephenking@lorem.com"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="e.g. +1 234 567 890"
                    required
                />
            </div>
        </form>
    </div>
    
  )
  
}

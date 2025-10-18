const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>First Name
          <input type="text" className="border p-2 w-full mt-2" />
          </label>
          <label>First Name
          <input type="text" className="border p-2 w-full mt-2" />
          </label>
        </div>
        <div>
          <label>Last Name
          <input type="text" className="border p-2 w-full mt-2" />
       </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
            jsx
          <label>Email
          <input type="email" className="border p-2 w-full mt-2" />
          </label>
        </div>
        <div>
          <label>Phone Number
          <input type="text" className="border p-2 w-full mt-2" />
          </label>
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label>Card Number
        <input type="text" className="border p-2 w-full mt-2" />
      </label>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Expiration Date
          <input type="text" className="border p-2 w-full mt-2" />
        </label>
        </div>
        <div>
          <label>CVV
          <input type="text" className="border p-2 w-full mt-2" />
        </label>
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label>Street Address
        <input type="text" className="border p-2 w-full mt-2" />
      </label>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>City
          <input type="text" className="border p-2 w-full mt-2" />
          </label>
        </div>
        <div>
          <label>State
          <input type="text" className="border p-2 w-full mt-2" />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Zip Code
          <input type="text" className="border p-2 w-full mt-2" />
        </label>
        </div>
        <div>
          <label>Country
          <input type="text" className="border p-2 w-full mt-2" />
        </label>
        </div>
      </div>

      {/* Submit Button */}
      <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
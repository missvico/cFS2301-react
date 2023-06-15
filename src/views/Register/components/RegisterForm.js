function RegisterForm({handleChange, handleSubmit, userData}) {
  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="email" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          onChange={handleChange}
          value={userData.email}
        />
        {/* <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div> */}
      </div>
      <div class="mb-3">
        <label for="username" class="form-label">
          Username
        </label>
        <input
          type="text"
          class="form-control"
          id="username"
          onChange={handleChange}
          value={userData.username}
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="password"
          onChange={handleChange}
          value={userData.password}
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="newsletter" />
        <label class="form-check-label" for="newsletter">
          Deseo recibir novedades al mail.
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default RegisterForm;

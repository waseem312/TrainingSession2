import React, { useState } from 'react';
import cover from "../src/download.jpeg";
import { Link } from "react-router-dom";

import { 
  TextField, 
  Button, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  Checkbox, 
  FormControl, 
  FormLabel, 
  MenuItem, 
  Select, 
  InputLabel, 
  Box, 
  Grid,
  Paper, 
  Typography 
} from '@mui/material';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null);
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');
  const [agree, setAgree] = useState(false);

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleHobbiesChange = (event) => {
    const value = event.target.value;
    setHobbies(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      fullName,
      username,
      password,
      confirmPassword,
      email,
      phone,
      dob,
      gender,
      hobbies,
      profilePicture,
      country,
      bio,
      agree
    });
  };

  return (
    <Grid
      container
      component="main"
      sx={{
        fontWeight: '700',
      }}
    >
      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        sx={{
          backgroundImage:`url(${cover})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={7}>
        <Paper elevation={3} sx={{ p: 3, maxWidth: 600, width: '100%' }}>
          <Box textAlign="center" mb={3}>
            <Typography variant="h4">Register Now</Typography>
            <Typography variant="subtitle1">While seats are available!</Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2">Full Name</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2">Username</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2">Password</Typography>
                <TextField
                  fullWidth
                  type="password"
                  variant="outlined"
                  margin="normal"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2">Confirm Password</Typography>
                <TextField
                  fullWidth
                  type="password"
                  variant="outlined"
                  margin="normal"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2">Email Address</Typography>
                <TextField
                  fullWidth
                  type="email"
                  variant="outlined"
                  margin="normal"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2">Phone Number</Typography>
                <TextField
                  fullWidth
                  type="tel"
                  variant="outlined"
                  margin="normal"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2">Date of Birth</Typography>
                <TextField
                  fullWidth
                  type="date"
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup value={gender} onChange={handleGenderChange}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">Hobbies</FormLabel>
                  <FormControlLabel
                    control={<Checkbox checked={hobbies.includes('reading')} onChange={handleHobbiesChange} value="reading" />}
                    label="Reading"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={hobbies.includes('travelling')} onChange={handleHobbiesChange} value="travelling" />}
                    label="Traveling"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" flexDirection="column" alignItems="start" mb={2}>
                  <InputLabel htmlFor="profile">Profile Picture</InputLabel>
                  <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" id="profile" type="file" onChange={handleProfilePictureChange} />
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Select Country</InputLabel>
                  <Select value={country} onChange={(e) => setCountry(e.target.value)} label="Select Country">
                    <MenuItem value="india">India</MenuItem>
                    <MenuItem value="china">China</MenuItem>
                    <MenuItem value="russia">Russia</MenuItem>
                    <MenuItem value="iran">Iran</MenuItem>
                    <MenuItem value="iraq">Iraq</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Bio</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} required />}
                  label="Agree to Terms and Conditions"
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              <Link to="/login">
                {"Already have an account? Login"}
              </Link>
              <Button type="reset" variant="outlined" onClick={() => {
                setFullName('');
                setUsername('');
                setPassword('');
                setConfirmPassword('');
                setEmail('');
                setPhone('');
                setDob('');
                setGender('');
                setHobbies([]);
                setProfilePicture(null);
                setCountry('');
                setBio('');
                setAgree(false);
              }}>
                Reset
              </Button>
            </Box>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Register;
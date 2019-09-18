var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: [],
    formPatient: {
      FistName: '',
      LastName:'',
      dob:'',
      SexAtBirth: '',
    }
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { patientRecordApp.patients = json })
    },
    handleCreateRecord(event) {
      //fetch(url, {method: 'past', data:thisFormPatient})
      // .then()
      this.patients.push(this.formPatient);
      this.formPatient= {
        FistName: '',
        LastName:'',
        dob:'',
        SexAtBirth: '',
      }
    }
  },
  created() {
    this.fetchPatients();
  }
});

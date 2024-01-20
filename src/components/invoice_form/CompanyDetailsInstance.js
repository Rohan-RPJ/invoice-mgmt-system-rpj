class CompanyDetailsInstance {
  constructor(
    cmpnyName,
    cmpnyAddr,
    cmpnyMobNo,
    cmpnyEmail,
    cmpnyPanNo,
    cmpnyGst
  ) {
    this.cmpnyName = cmpnyName;
    this.cmpnyAddr = cmpnyAddr;
    this.cmpnyMobNo = cmpnyMobNo;
    this.cmpnyEmail = cmpnyEmail;
    this.cmpnyPanNo = cmpnyPanNo;
    this.cmpnyGst = cmpnyGst;
  }

  getCmpnyName() {
    return this.cmpnyName;
  }

  getCmpnyAddr() {
    return this.cmpnyAddr;
  }

  getCmpnyMobNo() {
    return this.cmpnyMobNo;
  }

  getCmpnyEmail() {
    return this.cmpnyEmail;
  }

  getCmpnyPanNo() {
    return this.cmpnyPanNo;
  }

  getCmpnyGst() {
    return this.cmpnyGst;
  }
}

export default CompanyDetailsInstance;

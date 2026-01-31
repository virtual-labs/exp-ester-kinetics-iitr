const ExperimentStorage = {
  saveExperimentData: function(data) {
    const experimentData = {
      normality_titrate: data.normality_titrate || null,
      volume_titrant: data.volume_titrant || null,
      vadded: data.vadded || null,
      normality_titrant: data.normality_titrant || null,
      timestamp: new Date().getTime()
    };
    localStorage.setItem('experimentData', JSON.stringify(experimentData));
    console.log("experimentData", experimentData);
  },

  getExperimentData: function() {
    const data = localStorage.getItem('experimentData');
    return data ? JSON.parse(data) : null;
  },

  getParameter: function(paramName) {
    const data = this.getExperimentData();
    return data ? data[paramName] : null;
  },

  clearExperimentData: function() {
    localStorage.removeItem('experimentData');
  },

  hasExperimentData: function() {
    return localStorage.getItem('experimentData') !== null;
  }
};

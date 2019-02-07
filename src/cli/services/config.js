const { fileService } = require('./file');

const _public = {};

_public.get = clientDirectory => {
  const config = getPitsbyConfig(clientDirectory);
  return normalizeEngineCase(normalizeConfig(config));
};

function getPitsbyConfig(clientDirectory){
  return fileService.readJSONSync(`${clientDirectory}/pitsby.json`);
}

function normalizeConfig(config){
  return config.moduleName ? pushAngularConfigToProjects(config) : config;
}

function normalizeEngineCase(config){
  if(config.projects)
    config.projects.forEach(project => {
      project.engine = project.engine.toLowerCase();
    });
  return config;
}

function pushAngularConfigToProjects(config){
  config.projects = config.projects || [];
  config.projects.push({
    engine: 'angular',
    collectDocsFrom: config.collectFrom,
    moduleName: config.moduleName
  });
  return config;
}

module.exports = _public;

using Newtonsoft.Json;

namespace react_spa {

    public class ExecuteReplaceModel {
        [JsonProperty("Code")]

        public string Code {
            get;
            set;
        }

        [JsonProperty("ReturnVariableName")]
        public string ReturnVariableName {
            get;
            set;
        }

        [JsonProperty("UsingStatements")]
        public string[] UsingStatements {
            get;
            set;
        }
    };

};
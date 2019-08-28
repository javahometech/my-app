package com.areyes1.jgc.junit.integ;


public class JUnitAssertEqualsServiceExample {

public void initiateMetaData(ServiceObject serviceObject) {
serviceObject.setControlNo(1);
serviceObject.setDescription("This is a sample service object");
serviceObject.setMetaData("{{data1:data2},{data3:data4}}");
serviceObject.setName("Service Object Name");
serviceObject.setStatus("New");
}

public ServiceObject processObject(ServiceObject serviceObject) {
serviceObject.setStatus("Processed");
return serviceObject;
}

public ServiceObject postProcessing(ServiceObject serviceObject) {
serviceObject.setMetaData("{{{data1:data2},{data3:data4}},{status:complete}}");
serviceObject.setStatus("Complete");
return serviceObject;
}

}
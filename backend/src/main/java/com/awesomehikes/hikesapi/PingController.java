package com.awesomehikes.hikesapi;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class PingController {

  @GetMapping("/ping")
  @ResponseBody
  public String sayHello() {
    return "pong";
  }
}
{
  "targets": [
    {
      "target_name": "node-ping-addon",
      "sources": [ "lib/pingit.cc", "lib/sync.cc", "lib/async.cc", "lib/pinger.cc" ],
      "include_dirs" : [
          "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}

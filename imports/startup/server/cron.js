import { SyncedCron } from 'meteor/percolate:synced-cron';
import { SliderValues } from '../../api/sliderValues/slidervalues';

// // // // // Cron jobs // // // // //

// Add new cron job
SyncedCron.add({
  name: 'Remove old users',
  // Schedule every 2 minutes.
  schedule(parser) {
    return parser.text('every 2 min');
  },
  job() {
    // Number of minutes between each cron job.
    const minutes = 2;
    // Get current date
    const today = new Date();
    // Milliseconds per minute
    const MS_PER_MINUTE = 60000;
    // Remove users that are older than 2 minutes.
    const targetDate = new Date(today - (minutes * MS_PER_MINUTE));
    SliderValues.remove({ createdAt: { $lt: targetDate } });
  },
});
// Start the cron job.
SyncedCron.start();

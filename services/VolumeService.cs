public class VolumeService
{
    public double Volume { get; private set; } = 1.0; // Default volume at 100%

    public event Action OnVolumeChanged;

    public void SetVolume(double volume)
    {
        Volume = volume;
        OnVolumeChanged?.Invoke(); // Notify subscribers that the volume has changed
    }
}
